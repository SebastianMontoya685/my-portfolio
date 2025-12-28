import React from 'react';
import './EInvoicingPage.css';

export default function EInvoicingPage() {
    return (
        <div className="einvoicing-page">
            <div className="einvoicing-container">
                {/* Header Section */}
                <div className="einvoicing-header">
                    <h1 className="einvoicing-title">E-Invoicing</h1>
                    <p className="einvoicing-subtitle">Airtable Clone Project</p>
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
                        An Airtable clone project that replicates the core functionality of allowing 
                        a user to create a base and create views/tables in a base. Highlight features 
                        include allowing a user to add rows to a table in bulk, such as adding 1 million 
                        rows at once to a table.
                    </p>
                </div>
            </div>
        </div>
    );
}

