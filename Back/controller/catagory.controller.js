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
        console.log(req.user);
        // Create category with user ID from authenticated user
        const category = await prisma.category.create({
            data: {
                name,
                color,
                userId: req.user.id  // Make sure this matches your Prisma schema field name
            },
        });

        res.status(201).json({
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

export const getAll = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.status(200).json({
            success: true,
            data: categories
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
        const category = await prisma.category.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
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