import { Router } from 'express'

const router = Router()

router.get('/', function(req, res) {
    res.send('ServeMevia API');
});

export default router;

