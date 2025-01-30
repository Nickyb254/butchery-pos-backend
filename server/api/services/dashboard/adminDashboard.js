import CustomerModel  from '../../models/customers.js';

router.get('/customer-stats', async (req, res) => {
    try {
        const stats = await CustomerModel.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            },
            { 
                $project: {
                    _id: 0,
                    status: '$_id',
                    count: 1
                }
            }
        ]);

        res.json(stats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
