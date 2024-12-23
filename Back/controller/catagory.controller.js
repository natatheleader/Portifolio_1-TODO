import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//get user
export const protectedd = (req, res) => {
    res.json({ 
        success: true, 
        message: 'Protected data', 
        user: req.user 
    });
};

export const create = async (req, res) => {
    try {
        const { name, color } = req.body;
        // Create catagory with user ID from authenticated user
        const catagory = await prisma.catagory.create({
            data: {
                name,
                color,
                user_id: req.user.id  // Make sure this matches your Prisma schema field name
            },
        });

        res.status(201).json({
            success: true,
            data: catagory
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getAll = async (req, res) => {
    try {
        const catagories = await prisma.catagory.findMany({
            where: {
                user_id: req.user.id
            }
        });
        res.status(200).json({
            success: true,
            data: catagories
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
        const catagoryId = parseInt(req.params.id);  // Get ID from URL parameter

        const catagory = await prisma.catagory.findUnique({
            where: {
                id: catagoryId,
                user_id: req.user.id  // Add this to ensure user can only access their own categories
            },
            include: {
                task: true  // This will include all related tasks
                // If you want to select specific fields from tasks:
                // tasks: {
                //     select: {
                //         id: true,
                //         title: true,
                //         description: true,
                //         completed: true,
                //         // ... other task fields you want
                //     }
                // }
            }
        });
        if (!catagory) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            success: true,
            data: catagory
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
        const category = await prisma.category.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: req.body
        });
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).json({
            success: true,
            data: category
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const deleteOne = async (req, res) => {
    try {
        const category = await prisma.category.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(200).json({
            success: true,
            message: 'Category deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};