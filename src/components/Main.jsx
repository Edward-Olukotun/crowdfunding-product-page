import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import logo from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";
import check from "../images/icon-check.svg";

import closeModal from "../images/icon-close-modal.svg";

function Main() {
  const [pledgeBamboo, setPledgeBamboo] = useState(false);
  const [pledgeBlack, setPledgeBlack] = useState(false);
  const [pledgeMahogany, setPledgeMahogany] = useState(false);
  const [backUp, setBackUp] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [reward, setReward] = useState(false);
  const [secondReward, setSecondReward] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const handlePledgeBamboo = () => {
    setPledgeBamboo(!pledgeBamboo);
    setPledgeBlack(false);
    setPledgeMahogany(false);
  };

  const handlePledgeBlack = () => {
    setPledgeBlack(!pledgeBlack);
    setPledgeBamboo(false);
    setPledgeMahogany(false);
  };

  const handleMahogany = () => {
    setPledgeMahogany(!pledgeMahogany);
    setPledgeBamboo(false);
    setPledgeBlack(false);
  };

  const handleBackup = () => {
    setBackUp(!backUp);
    setReward(false);
    setPledgeBlack(false);
    setPledgeBamboo(false);
    setPledgeMahogany(false);
    setSecondReward(false);
    setSelectedValue(null);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    setReward(false);
    setPledgeBlack(false);
    setPledgeBamboo(false);
    setPledgeMahogany(false);
    setSecondReward(false);
  };
  const handleReward = () => {
    setReward(!reward);
    setSecondReward(false);
    setPledgeBlack(false);
    setPledgeBamboo(false);
    setPledgeMahogany(false);
  };
  const handleSecondReward = () => {
    setSecondReward(!secondReward);
    setReward(false);
    setPledgeBlack(false);
    setPledgeBamboo(false);
    setPledgeMahogany(false);
  };
  const handleClose = () => {
    setSelectedValue(null);
    setReward(false);
    setSecondReward(false);
    setPledgeBlack(false);
    setPledgeBamboo(false);
    setPledgeMahogany(false);
    setBackUp(false);
  };

  return (
    <>
      <section className="absolute z-10 w-[90%] md:w-[50%] md:ml-[300px] -mt-[60px]  bg-white shadow-2xl rounded-md font-medium text-xl text-start px-4  h-fit content-center ml-[5%] flex flex-col ">
        <div className=" w-[50px] mx-auto -mt-[20px]">
          <img src={logo} alt="/" className="h-[40px] w-[40px]" />
        </div>
        {/* mobile */}
        <section className="font-bold w-[90%] ml-[95px] py-4 md:hidden">
          <p>Mastercraft Bamboo </p>
          <p className="ml-8">Monitor Riser</p>
        </section>
        {/* desktop */}
        <section className=" md:flex hidden md:ml-[170px] ">
          <p>Mastercraft Bamboo Monitor Riser</p>
        </section>
        {/* mobile */}
        <section className="font-medium text-Darkgray mx-auto py-4 text-sm md:hidden">
          <p>A beautifull handcraftedmonitor stand to</p>
          <p className="ml-8">reduce neck and eye strain</p>
        </section>
        {/* desktop */}
        <section className="font-medium text-Darkgray mx-auto py-4 text-sm md:flex hidden">
          <p>
            A beautifull handcraftedmonitor stand to reduce neck and eye strain
          </p>
        </section>

        {/* pop up thanks down */}
        <div>
          {reward ? (
            <div className="bg-white shadow-lg w-[100%] ml-[-15px] h-fit mt-[1100px] md:w-[60%] md:ml-[20%] md:h-[300px] md:mt-[600px] absolute rounded-xl">
              <img
                src={check}
                alt="/"
                className="w-[50px] h-[50px] mt-5 mx-auto"
              />
              <p className="font-bold text-center my-2">
                Thanks for your support!
              </p>
              <p className="text-center mx-4 font-medium my-2">
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </p>
              <button
                onClick={handleClose}
                className="bg-Moderatecyan text-white rounded-lg my-4 w-[30%] ml-[35%]"
              >
                Got it!
              </button>
            </div>
          ) : (
            <div className=" mt-[-1000px]"></div>
          )}
        </div>
        <div className="flex  w-[100%] md:w-[80%] justify-evenly mb-5 md:ml-8  ">
          <button
            onClick={handleBackup}
            className="w-[200px] bg-Moderatecyan text-white rounded-3xl p-2 mr-4 hover:bg-Darkcyan"
          >
            Back this project
          </button>
          <div
            onClick={handleBookmark}
            className={
              bookmarked
                ? "flex flex-row bg-Darkgray/20 text-Darkcyan rounded-3xl fill-Moderatecyan  hover:cursor-pointer  "
                : "flex flex-row bg-Darkgray/30 text-Darkgray rounded-3xl  hover:cursor-pointer "
            }
          >
            <img src={bookmark} alt="/" className="h-[50px] w-[50px] " />
            <span className="mx-4 pt-2 hidden md:block">
              {bookmarked ? (
                <p className="text-Darkcyan hover:text-Moderatecyan">
                  Bookmarked
                </p>
              ) : (
                <p className="hover:text-white/75">Bookmark</p>
              )}
            </span>
          </div>
        </div>
        {/* popup */}
        <section
          className={
            backUp
              ? "absolute z-10  text-black  w-[100%] bg-white shadow-2xl rounded-xl -mt-32  h-fit pb-10 content-center  flex flex-col "
              : "hidden"
          }
        >
          <div>
            <section className="flex justify-between py-3 mx-4">
              {/* pop up thanks up */}
              <div>
                {secondReward ? (
                  <div className="bg-white w-[100%] ml-[-15px] h-fit mt-[300px] md:w-[60%] md:ml-[20%] md:h-[300px]  absolute rounded-xl">
                    <img
                      src={check}
                      alt="/"
                      className="w-[50px] h-[50px] mt-5 mx-auto"
                    />
                    <p className="font-bold text-center my-2">
                      Thanks for your support!
                    </p>
                    <p className="text-center mx-4 font-medium my-2">
                      Your pledge brings us one step closer to sharing
                      Mastercraft Bamboo Monitor Riser worldwide. You will get
                      an email once our campaign is completed.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-Moderatecyan text-white rounded-lg my-4 w-[30%] ml-[35%]"
                    >
                      Got it!
                    </button>
                  </div>
                ) : (
                  <div className=" mt-[-1000px]"></div>
                )}
              </div>
              <p> Back this project</p>
              <img
                src={closeModal}
                alt="/"
                onClick={handleBackup}
                className="object-contain hover:cursor-pointer"
              />
            </section>

            <p className="text-sm text-Darkgray mx-4">
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <section className="   bg-white shadow-2xl rounded-md w-[90%] ml-[5%] h-[150px] mt-5">
              <div className="flex justify-start mx-4 pt-4 ">
                <input
                  type="radio"
                  value="option1"
                  checked={selectedValue === "option1"}
                  onChange={() => setSelectedValue("option1")}
                  className="accent-Darkcyan"
                  onClick={handleSecondReward}
                />
                <p className="mx-4 hover:text-Moderatecyan hover:cursor-pointer">
                  Pledge with no reward
                </p>
              </div>
              <p className="text-sm text-Darkgray mx-4">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </section>
            <section className="   bg-white shadow-2xl rounded-md w-[90%] ml-[5%] h-fit mt-5  border border-white/10 hover:border-Moderatecyan">
              <div className="flex justify-start mx-4 py-4">
                <input
                  type="radio"
                  value="option2"
                  checked={selectedValue === "option2"}
                  onChange={() => setSelectedValue("option2")}
                  className="accent-Darkcyan"
                  onClick={handlePledgeBamboo}
                />

                <section className="flex flex-col  md:flex-row  py-2 ml-2">
                  <p className=" hover:text-Moderatecyan hover:cursor-pointer">
                    Bamboo Stand
                  </p>
                  <p className="ml-[30px] text-Moderatecyan">
                    Pledge $25 or more
                  </p>
                </section>
                <p className="ml-[130px] py-2 md:block  hidden  ">
                  <span className="font-bold text-xl "> 101 </span>left
                </p>
              </div>
              <p className="text-sm text-Darkgray mx-4 md:pb-5">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you'll be added to a
                special Backer member list.
              </p>
              <p className="mx-4 py-2 md:hidden">
                <span className="font-bold text-xl "> 101 </span>left
              </p>
              <section
                className={
                  pledgeBamboo
                    ? " text-black mt-[40px] w-[90%]shadow-2xl rounded-xl  h-fit pb-10 content-center  flex flex-col "
                    : "hidden"
                }
              >
                <div className="h-[2px] w-[90%] mx-auto bg-Darkgray  "></div>
                <div className="flex flex-col md:flex-row text-center text-Darkgray">
                  <p className="mx-4 my-3"> Enter your pledge </p>
                  <div className="my-3 md:ml-[100px]">
                    <button
                      onClick={handleSecondReward}
                      className="w-[100px] bg-gray-300 text-Darkgray rounded-3xl p-2 mr-4  border border-Darkgray hover:border-Moderatecyan hover:text-black "
                    >
                      $25
                    </button>
                    <button
                      onClick={handleSecondReward}
                      className="w-[150px] bg-Moderatecyan text-white rounded-3xl p-2 mr-4"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </section>
            </section>
            <section className="   bg-white shadow-2xl rounded-md w-[90%] ml-[5%] h-fit mt-5  hover:border border-Moderatecyan">
              <div className="flex justify-start mx-4 pt-4">
                <input
                  type="radio"
                  value="option3"
                  checked={selectedValue === "option3"}
                  onChange={() => setSelectedValue("option3")}
                  className="accent-Darkcyan"
                  onClick={handlePledgeBlack}
                />

                <section className="flex flex-col  md:flex-row  py-2 ml-2">
                  <p className=" hover:text-Moderatecyan hover:cursor-pointer">
                    Black Edition Stand
                  </p>
                  <p className="ml-[30px] text-Moderatecyan">
                    Pledge $75 or more
                  </p>
                </section>
                <p className="ml-[110px] py-2 md:block  hidden ">
                  <span className="font-bold text-xl"> 64 </span>left
                </p>
              </div>
              <p className="text-sm text-Darkgray mx-4 md:pb-5">
                You get a Black Special Edition computer stand and a personal
                thank you. You'll be added to our Backer member list. Shipping
                is included. will be signed up to receive product updates via
                email.
              </p>
              <p className="mx-4 py-2 md:hidden">
                <span className="font-bold text-xl"> 64 </span>left
              </p>
              <section
                className={
                  pledgeBlack
                    ? "  text-black mt-[40px] w-[90%]  shadow-2xl rounded-xl  h-fit pb-10 content-center  flex flex-col "
                    : "hidden"
                }
              >
                <div className="h-[2px] w-[90%] mx-auto bg-Darkgray "></div>
                <div className="flex flex-col md:flex-row text-center text-Darkgray">
                  <p className="mx-4 my-3"> Enter your pledge </p>
                  <div className="my-3 md:ml-[60px]">
                    <button
                      onClick={handleSecondReward}
                      className="w-[100px] bg-gray-300 text-Darkgray rounded-3xl p-2 mr-4  border border-Darkgray hover:border-Moderatecyan hover:text-black "
                    >
                      $75
                    </button>
                    <button
                      onClick={handleSecondReward}
                      className="w-[150px] bg-Moderatecyan text-white rounded-3xl p-2 mr-4"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </section>
            </section>
            <section className="   bg-white/25 py-4  border-Darkgray/100 text-Darkgray/100 shadow-2xl rounded-md w-[90%] ml-[5%] h-fit mt-5">
              <div className="flex justify-start mx-4 pt-4">
                <input
                  type="radio"
                  value="option4"
                  checked={selectedValue === "option4"}
                  onChange={() => setSelectedValue("option4")}
                  onClick={handleMahogany}
                />
                <section className="flex flex-col  md:flex-row  py-2 ml-2">
                  <p className="hover:text-Moderatecyan hover:cursor-pointer">
                    Mahogany Special Edition
                  </p>
                  <p className="ml-[30px] text-Moderatecyan">
                    Pledge $200 or more
                  </p>
                </section>
                <p className="ml-[50px] py-2 md:block  hidden ">
                  <span className="font-bold text-xl"> 0 </span>left
                </p>
              </div>
              <p className="text-sm text-Darkgray mx-4">
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You'll be added to our Backer member
                list. Shipping is included.
              </p>
              <p className="mx-4 py-2 md:hidden">
                <span className="font-bold text-xl"> 0 </span>left
              </p>
              <section
                className={
                  pledgeMahogany
                    ? "  text-black mt-[40px] w-[90%]  shadow-2xl rounded-xl  h-fit pb-10 content-center  flex flex-col "
                    : "hidden"
                }
              >
                <div className="h-[2px] w-[90%] mx-auto bg-Darkgray "></div>
                <div className="flex flex-col text-center">
                  <p> Enter your pledge </p>
                  <div className="my-3">
                    <button className="w-[150px] bg-gray-300 text-white rounded-3xl p-2 mr-4">
                      $75
                    </button>
                    <button className="w-[150px] bg-Moderatecyan text-white rounded-3xl p-2 mr-4">
                      Continue
                    </button>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </section>
      </section>
      <section className=" w-[90%] md:w-[50%] md:ml-[300px] mt-[230px] md:mt-40     bg-white shadow-2xl rounded-md font-medium text-xl text-start px-4  h-fit content-center ml-[5%] flex flex-col ">
        <div className="md:flex justify-evenly">
          <section className="text-center py-3">
            <p className="font-bold text-2xl">$89,914</p>
            <p className="text-sm text-Darkgray">of $100,000 backed</p>
          </section>
          {/* mobile */}
          <div className="h-[2px] w-[10%] mx-auto bg-Darkgray md:hidden"></div>
          {/* desktop */}
          <div className="md:h-[30px] md:mt-[20px] md:w-[2px] bg-Darkgray hidden md:flex"></div>
          <section className="text-center py-3">
            <p className="font-bold text-2xl"> 5,007</p>
            <p className="text-sm text-Darkgray"> total backers</p>
          </section>

          {/* mobile */}
          <div className="h-[2px] w-[10%] mx-auto bg-Darkgray md:hidden"></div>
          {/* desktop */}
          <div className="md:h-[30px] md:mt-[20px] md:w-[2px] bg-Darkgray hidden md:flex"></div>
          <section className="text-center py-3">
            <p className="font-bold text-2xl"> 56 </p>
            <p className="text-sm text-Darkgray">days left</p>
          </section>
          {/* mobile */}
          <div className="h-[2px] w-[10%] mx-auto bg-Darkgray md:hidden mb-5"></div>
          {/* desktop */}
        </div>
        <div className="w-[60%] mx-auto mb-8">
          <ProgressBar
            completed={86}
            customLabel="-"
            bgColor="Darkcyan"
            labelColor="Darkcyan"
          />
        </div>
      </section>
      <section className=" w-[90%] md:w-[50%] mb-10 md:ml-[300px] mt-[40px] md:mt-10   bg-white shadow-2xl rounded-md  px-4  h-fit content-center ml-[5%] flex flex-col ">
        <article>
          <p className="font-bold py-4 text-lg mx-8"> About this project</p>
          <p className="font-medium text-sm text-Darkgray mx-8 ">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="font-medium text-sm text-Darkgray mx-8 my-4">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </article>

        <section className=" w-[90%] md:w-[80%] md:ml-[10%]  mt-[40px] md:mt-10    bg-white shadow-2xl rounded-md  px-4  h-fit content-center ml-[5%] flex flex-col ">
          <div className="md:flex justify-between">
            <p className="mx-8 font-bold py-4 text-lg">Bamboo Stand</p>
            <p className="mx-8 mb-4 text-Moderatecyan text-white md:pt-4">
              Pledge $25 or more
            </p>
          </div>
          <p className="font-medium text-sm text-Darkgray mx-8 ">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you'll be added to a special
            Backer member list
          </p>

          <div className="md:flex justify-between">
            <p className="mx-8 md:pt-4">
              <span className="font-bold text-3xl"> 101 </span>left
            </p>
            <button
              onClick={handleReward}
              className="w-[170px] p-3 text-white bg-Moderatecyan  rounded-3xl my-4 mx-8 hover:bg-Darkcyan"
            >
              Select Reward
            </button>
          </div>
        </section>
        <section className=" w-[90%] md:w-[80%]  md:ml-[10%] mt-[40px] md:mt-10    bg-white shadow-2xl rounded-md  px-4  h-fit content-center ml-[5%] flex flex-col ">
          <div className="md:flex justify-between">
            <p className="mx-8 font-bold py-4 text-lg"> Black Edition Stand</p>
            <p className="mx-8 mb-4 text-Moderatecyan text-white md:pt-4">
              Pledge $75 or more
            </p>
          </div>
          <p className="font-medium text-sm text-Darkgray mx-8 ">
            You get a Black Special Edition computer stand and a personal thank
            you. You'll be added to our Backer member list. Shipping is
            included.
          </p>

          <div className="md:flex justify-between">
            <p className="mx-8 md:pt-4">
              <span className="font-bold text-3xl"> 64 </span> left
            </p>
            <button
              onClick={handleReward}
              className="w-[170px] p-3 text-white bg-Moderatecyan  rounded-3xl my-4 mx-8 hover:bg-Darkcyan"
            >
              Select Reward
            </button>
          </div>
        </section>
        <section className=" w-[90%] mb-5 md:w-[80%] md:ml-[10%]  mt-[40px] md:mt-10    bg-white shadow-2xl rounded-md  px-4  h-fit content-center ml-[5%] flex flex-col text-Darkgray">
          <div className="md:flex justify-between">
            <p className="mx-8 font-bold py-4 text-lg text-gray-300 md:mx-4">
              Mahogany Special Edition
            </p>
            <p className="mx-8 mb-4  md:mx-4 md:pt-4 text-Moderatecyan">
              Pledge $200 or more
            </p>
          </div>
          <p className="font-medium text-sm text-gray-300 mx-8 md:mx-4 ">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You'll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className="md:flex justify-between">
            <p className="mx-8 text-gray-300 md:mx-4 md:pt-4">
              <span className="font-bold text-3xl "> 0 </span> left
            </p>
            <button className="w-[170px] p-3 text-white bg-Darkgray rounded-3xl my-4 mx-8 hover:cursor-not-allowed">
              Out of Stock
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default Main;
