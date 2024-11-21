export const protectedd = (req, res) => {
    res.json({ 
        success: true, 
        message: 'Protected data', 
        user: req.user 
    });
};