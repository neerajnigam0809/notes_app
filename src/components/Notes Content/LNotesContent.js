import React from "react";
import "./LNotesContent.css";

function LNotesContent({ note }) {
  
  return (
    <div className="l_notes_content_note">
      <div className="l_notes_content_date_time_details">
      <div className="l_notes_content_time">{note.time}</div>
        <div className="l_notes_content_date">{note.date}</div>
      </div>
      <div className="l_notes_content_details">
        {note.content}
      </div>
    </div>
  );
}

export default LNotesContent;
