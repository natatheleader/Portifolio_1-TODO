import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const create = async (req, res) => {
    try {
        const { name } = req.body;
        // Create tag with user ID from authenticated user
        const tag = await prisma.tag.create({
            data: {
                name,
                user_id: req.user.id  // Make sure this matches your Prisma schema field name
            },
        });

        res.status(201).json({
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

export const getAll = async (req, res) => {
    try {
        const tags = await prisma.tag.findMany({
            where: {
                user_id: req.user.id
            }
        });
        res.status(200).json({
            success: true,
            data: tags
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
        const tagId = parseInt(req.params.id);  // Get ID from URL parameter

        const tag = await prisma.tag.findUnique({
            where: {
                id: tagId,
                user_id: req.user.id  // Add this to ensure user can only access their own categories
            }
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
    try {
        const tag = await prisma.tag.delete({
            where: {
                id: parseInt(req.params.id),
                user_id: req.user.id
            }
        });
        res.status(200).json({
            success: true,
            message: 'Tag deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};