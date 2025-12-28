import React from 'react';
import './AirtableClonePage.css';

export default function AirtableClonePage() {
    return (
        <div className="airtable-page">
            <div className="airtable-container">
                {/* Header Section */}
                <div className="airtable-header">
                    <h1 className="airtable-title">Airtable Clone</h1>
                    <p className="airtable-subtitle">Database Management Application</p>
                </div>

                {/* Video Section */}
                <div className="airtable-media">
                    <video 
                        src="/cloneTask_1.mp4" 
                        controls 
                        className="airtable-video"
                        poster="/e-invoicing-homedark.jpg"
                    >
                        Sorry, your browser does not support embedded videos.
                    </video>
                </div>

                {/* Description Section */}
                <div className="airtable-description">
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

