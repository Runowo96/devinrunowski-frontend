import React from "react";
import "./ResumeBtn.scss";

function ResumeBtn() {
  // const[isOpen, setIsopen] = useState(false);

  return (
    <>
      <a
        href="https://drive.google.com/file/d/1neDoOT5-XNm84_i4tRImyNT1jG65WoCr/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="resume__cont"
      >
        <h4 className="resume__btn">View Resume</h4>
      </a>

      {/* <button onClick={()=>setIsopen(true)} className="resume-btn">Resume</button>
      {isOpen &&
        <div className="resume-modal">
            <button className="close-modal" onClick={() => setIsopen(false)}>X</button>
            <iframe src="https://drive.google.com/file/d/1neDoOT5-XNm84_i4tRImyNT1jG65WoCr/view?usp=sharing" title="resume" width="100%" height="100%"></iframe>
        </div>
        } */}
    </>
  );
}

export default ResumeBtn;
