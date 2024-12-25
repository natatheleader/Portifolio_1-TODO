import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async (req, res) => {
    try {
        const { 
            catagory_id,
            title, 
            description,
            priority,
            due_date,
            reminder_time,
            status,
            tag_ids  // Array of tag IDs if you want to add tags
        } = req.body;

        // Input validation
        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required'
            });
        }

        // Validate priority range (assuming 1-5)
        if (priority && (priority < 1 || priority > 5)) {
            return res.status(400).json({
                success: false,
                message: 'Priority must be between 1 and 5'
            });
        }

        // Validate dates
        let formattedDueDate = null;
        let formattedReminderTime = null;
        const now = new Date();

        if (due_date) {
            formattedDueDate = new Date(due_date);
            if (isNaN(formattedDueDate)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid due date format'
                });
            }
            // Check if due date is in the past
            if (formattedDueDate < now) {
                return res.status(400).json({
                    success: false,
                    message: 'Due date cannot be in the past'
                });
            }
            formattedDueDate = formattedDueDate.toISOString();
        }

        if (reminder_time) {
            formattedReminderTime = new Date(reminder_time);
            if (isNaN(formattedReminderTime)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid reminder time format'
                });
            }
            // Check if reminder time is in the past
            if (formattedReminderTime < now) {
                return res.status(400).json({
                    success: false,
                    message: 'Reminder time cannot be in the past'
                });
            }
            // Check if reminder time is after due date (if due date exists)
            if (due_date && formattedReminderTime > new Date(due_date)) {
                return res.status(400).json({
                    success: false,
                    message: 'Reminder time must be before the due date'
                });
            }
            formattedReminderTime = formattedReminderTime.toISOString();
        }

        // Validate category exists and belongs to user
        if (catagory_id) {
            const category = await prisma.catagory.findFirst({
                where: {
                    id: catagory_id,
                    user_id: req.user.id
                }
            });

            if (!category) {
                return res.status(404).json({
                    success: false,
                    message: 'Category not found or does not belong to user'
                });
            }
        }

        // Create task with all relationships
        const task = await prisma.task.create({
            data: {
                title,
                description,
                priority: priority || 3, // Default priority if not provided
                due_date: formattedDueDate,
                reminder_time: formattedReminderTime,
                status: status || 'pending', // Default status if not provided
                user_id: req.user.id,
                catagory_id,
                // Create task history entry
                task_history: {
                    create: {
                        status_from: 'created',
                        status_to: status || 'pending'
                    }
                },
                // Add tags if provided
                task_tag: tag_ids ? {
                    create: tag_ids.map(tag_id => ({
                        tag_id: tag_id
                    }))
                } : undefined
            },
            // Include related data in response
            include: {
                catagory: true,
                task_tag: {
                    include: {
                        tag: true
                    }
                },
                task_history: true
            }
        });

        res.status(201).json({
            success: true,
            data: task,
            message: 'Task created successfully'
        });

    } catch (error) {
        console.error('Task creation error:', error);
        res.status(400).json({
            success: false,
            message: error.message || 'Failed to create task'
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const tasks = await prisma.task.findMany({
            where: {
                user_id: req.user.id
            },
            include: {
                catagory: true,
                task_history: true,
                task_tag: {
                    include: {
                        tag: true
                    }
                },
            }
        });
        res.status(200).json({
            success: true,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const taskId = parseInt(req.params.id);  // Get ID from URL parameter

        const task = await prisma.task.findUnique({
            where: {
                id: taskId,
                user_id: req.user.id  // Add this to ensure user can only access their own categories
            },
            include: {
                catagory: true,
                task_history: true,
                task_tag: {
                    include: {
                        tag: true
                    }
                },
            }
        });
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const update = async (req, res) => {
    try {
        const tag = await prisma.tag.update({
            where: {
                id: parseInt(req.body.id),
                user_id: req.user.id
            },
            data: {
                name: req.body.name,
            },
        });
        if (!tag) {
            return res.status(404).json({
                success: false,
                message: 'Tag not found'
            });
        }
        res.status(200).json({
            success: true,
            data: tag
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteOne = async (req, res) => {
    // make it soft delete
    try {
        const task = await prisma.task.delete({
            where: {
                id: parseInt(req.params.id),
                user_id: req.user.id
            }
        });
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};