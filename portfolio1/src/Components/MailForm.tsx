// src/components/MailingForm.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../Styles/MailForm.css';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const MailingForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            // Add logic here to send emails using an API or serverless function.
            console.log('Sending email...', formData);

            // Reset form fields after successful submission
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={'form'}>
            <div className={'input'}>
                <h1> Name: </h1>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className={'input'}>
                <h1> Email: </h1>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className={'input'}>
                <h1> Message: </h1>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button className={'submit-button'} type="submit">Submit</button>
        </form>
    );
};

export default MailingForm;
