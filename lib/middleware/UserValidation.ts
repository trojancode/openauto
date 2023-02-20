import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";

const user_body = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required()
});
const UserValidation = (next: any) => (
    req: NextApiRequest,
    res: NextApiResponse) => {

    const { name, email } = req.body;

    const { error } = user_body.validate({ name, email });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next(req, res);

}

export default UserValidation
