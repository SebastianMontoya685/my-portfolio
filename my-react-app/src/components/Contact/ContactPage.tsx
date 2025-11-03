import React, { useState } from 'react';
import './ContactPage.css';

const backendURL = "http://localhost:8080";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch(`${backendURL}/api/contact`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone || 'N/A',
                    service: formData.service || 'General Inquiry',
                    message: formData.message
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='contact-page'>
            <div className='contact-container'>
                <h1 className='contact-title'>Get In Touch</h1>
                <p className='contact-subtitle'>
                    Have a project in mind or want to collaborate? I'd love to hear from you.
                </p>
                
                <form className='contact-form' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder='Your name'
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder='your.email@example.com'
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='phone'>Phone (Optional)</label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Your phone number'
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='service'>Service Type (Optional)</label>
                        <select
                            id='service'
                            name='service'
                            value={formData.service}
                            onChange={handleChange}
                        >
                            <option value=''>Select a service</option>
                            <option value='Web Development'>Web Development</option>
                            <option value='Backend Development'>Backend Development</option>
                            <option value='Frontend Development'>Frontend Development</option>
                            <option value='AI/ML Development'>AI/ML Development</option>
                            <option value='Full Stack Development'>Full Stack Development</option>
                            <option value='General Inquiry'>General Inquiry</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            id='message'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder='Tell me about your project or inquiry...'
                            rows={6}
                        />
                    </div>

                    <button type='submit' className='submit-button' disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    {submitStatus === 'success' && (
                        <div className='success-message'>
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className='error-message'>
                            Oops! Something went wrong. Please try again.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

