import React from "react";

export const Team = (props) => {
  return (
    <section id="team" className="text-center">
      <div className="container">
        <div className="section-header">
          <h2>Meet the Team</h2>
          <p>
          Meet our dedicated expert, committed to delivering innovative solutions and exceptional service.
          </p>
        </div>
        <div className="team-members">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="team-member">
                  <div className="team-member-thumbnail">
                    <img src={d.img} alt={d.name} className="team-img" 
                    />
                  </div>
                  <div className="team-member-details">
                    <h4 className="team-member-name">{d.name}</h4>
                    <p className="team-member-job">{d.job}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </section>
  );
};
