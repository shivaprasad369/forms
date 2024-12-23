import React from "react";
import Container from "../Home/Container";

export default function About() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    e.target.reset();
  };

  return (
    <Container>
      <div className="w-[100%] pb-[4rem] flex flex-col max-lg:px-[3%] text-[#252525] gap-7 items-center justify-center">
        <h1 className="text-3xl  font-bold tracking-wider text-[#3fb4e2]">
          <h1>Working@RAKSHAUM</h1>
        </h1>
        <p className="md:text-5xl max-md:text-4xl font-bold uppercase text-[#3491b6] text-center">
        Join Our Team at Rakshaum  <br className="max-lg:hidden"/>
        Medical Devices
          {/* Join Our Team at Rakshaum Medical Devices */}
        </p>

        <p className="lg:w-[55%] text-xl tracking-wider leading-[1.7rem] text-center">
        Your ideas can make a difference. Whether you're an experienced professional or just starting your career, you'll find opportunities to grow and contribute to meaningful projects that impact lives.  
        </p>
      <h1 className="text-3xl font-bold text-center">Together, let's make a difference</h1>
        <div className="w-[100%] items-center justify-center flex flex-col gap-10 mt-10">
          <div className="md:w-[70%] p-[2rem] flex flex-col items-center justify-center gap-5 rounded-xl border-[1px] border-gray-300">
            <h1 className="text-3xl font-bold uppercase text-[#3fb4e2]">
              Submit Your Resume
            </h1>
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 text-[#252525] w-[100%]"
            >
              <div className="flex items-center w-[100%] gap-3">
               
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-[100%] border-[1px] border-gray-300  p-3 px-5 outline-none "
                    required
                  />
               
               
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="w-[100%] border-[1px] border-gray-300   p-3 px-5 outline-none "
                    required
                  />
               
              </div>

              <div className="flex items-center w-[100%] gap-3">
                
                  <input
                    type="text"
                    placeholder="Position"
                    className="w-[100%] border-[1px] border-gray-300  p-3 px-5 outline-none "
                    required
                  />
               
              </div>
             
              <textarea
                rows={7}
                placeholder="Cover Letter"
                className="w-[100%] border-[1px] border-gray-300   p-4 px-5 outline-none "
                required
              />
                 <label
                  htmlFor="name"
                  className="flex flex-col w-[100%] gap-1 text-xl font-semibold text-gray-500"
                >
                  Attachment (.pdf, .doc or .docx.)
                  <input
                    type="file"
                    placeholder="Resume"
                    name="resume"
                    className="w-[100%] text-gray-400 font-normal border-[1px] border-gray-300   p-2 px-5 outline-none "
                    required
                  />
                </label>

              <button className=" text-white text-xl font-bold w-fit  py-3 px-10 rounded-md bg-blue-400">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
