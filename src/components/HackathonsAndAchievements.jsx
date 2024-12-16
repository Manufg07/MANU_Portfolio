import React, { useState } from "react";
import Modal from "react-modal";
import { content } from "../Content";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};

Modal.setAppElement("#root");

const HackathonsAndAchievements = () => {
  const { hackathons, achievements } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section
      className="min-h-fit bg-bg_light_primary"
      id="hackathons-achievements"
    >
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="flex items-center gap-2">
          {selectedItem?.badge && (
            <img className="h-10" src={selectedItem.badge} alt="Badge" />
          )}
          {selectedItem?.poap && (
            <img className="h-10" src={selectedItem.poap} alt="POAP" />
          )}
          <h6>{selectedItem?.name}</h6>
        </div>
        <br />
        <p>{selectedItem?.description}</p>
        {selectedItem?.link && (
          <a
            href={selectedItem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Project : <p>{selectedItem.project}</p>
          </a>
        )}
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </Modal>

      {/* Hackathons */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {hackathons.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {hackathons.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-5 justify-center group">
          {hackathons.hackathon_content.map((item, i) => (
            <div
              key={i}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
              data-aos="fade-up"
              data-aos-delay={i * 200}
              onClick={() => {
                setSelectedItem(item);
                openModal();
              }}
            >
              <img
                src={item.poap}
                alt="POAP"
                className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 duration-200"
              />
              <h6 className="my-3">{item.name}</h6>
              <p className="leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {achievements.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {achievements.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-5 justify-center group">
          {achievements.achievement_content.map((item, i) => (
            <div
              key={i}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none"
              data-aos="fade-up"
              data-aos-delay={i * 200}
              onClick={() => {
                setSelectedItem(item);
                openModal();
              }}
            >
              <img
                src={item.badge}
                alt="Badge"
                className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 duration-200"
              />
              <h6 className="my-3">{item.name}</h6>
              <p className="leading-7">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsAndAchievements;
