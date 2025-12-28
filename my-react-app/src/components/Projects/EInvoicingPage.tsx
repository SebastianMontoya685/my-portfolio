import React from 'react';
import './EInvoicingPage.css';

export default function EInvoicingPage() {
    return (
        <div className="einvoicing-page">
            <div className="einvoicing-container">
                {/* Header Section */}
                <div className="einvoicing-header">
                    <h1 className="einvoicing-title">E-Invoicing</h1>
                    <p className="einvoicing-subtitle">Invoice Validation Platform</p>
                </div>

                {/* Video Section */}
                <div className="einvoicing-media">
                    <video 
                        src="/e-invoicing.mp4" 
                        controls 
                        className="einvoicing-video"
                        poster="/e-invoicing-homedark.jpg"
                    >
                        Sorry, your browser does not support embedded videos.
                    </video>
                </div>

                {/* Description Section */}
                <div className="einvoicing-description">
                    <h2>About the Project</h2>
                    <p>
                        Created an application for a client who works in the accounting and financial 
                        industry. Their main pain point was that they had issues with clients submitting 
                        invoices that were not valid or missed important information that they needed in 
                        order to be able to actually process the invoice. I created a web application to 
                        allow our client to bulk add invoices and determine which ones are valid and which 
                        ones are not. Invalid invoices are resent to their clients so the client can edit 
                        it and make it valid. Valid invoices are processed and passed onto the next person 
                        in the processing chain via email.
                    </p>
                </div>
            </div>
        </div>
    );
}

