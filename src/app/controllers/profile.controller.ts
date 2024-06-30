import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getProfile = async (req: Request, res: Response) => {
    if (!req.query || !req.query.id) {
        console.log('User id is required');
        return res.status(400).send('User id is required \n');
    }
    const userId = req.query.id.toString();
    console.log("query.id=" + userId);
    try {
        const userProfile = await userService.getUserProfile(userId);
        console.log('User Profile:');
        console.table(userProfile);
        console.log('\n');
        if (!userProfile) {
            console.log('User not found \n');
            return res.status(404).send('User not found');
        }
        res.render('profile', { profile: userProfile }, (err, html) => {
            res.send(html);
            if (err) {
                console.error('Error rendering profile template:', err);
                return res.status(500).send('Internal server error');
            }
        });
        './'
    } catch (error) {
        console.error('Internal server error:', error);
        res.status(500).send('Internal server error');
    }
}
