import React from "react";
import Image from "next/image";

function Story(): JSX.Element {
  return (
    <div style={{ fontFamily: "fantasy", fontSize: "20px", color: "red" }}>
      <p>Hi Katarina,</p>
      <p>
        Wow, you've made some serious progress in solving these puzzles! I'm
        proud of you!
      </p>
      <p>
        You're very close to your{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>gift</span>,
        don't give up now...
      </p>
      <p>
        Do you remember that{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>e-mail</span>{" "}
        that you received? Hopefully you didn't delete it... It contains{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>
          four numbers
        </span>
        . When combined, they form the code for the{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>locker</span>.
      </p>
      <p>
        The locker is at the{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>2nd floor</span>.
      </p>
      <p>
        But which locker exactly is it? Well... It has to do something with your{" "}
        <span style={{ fontWeight: "bold", fontSize: "24px" }}>birth date</span>
        ...
      </p>
      <p>Now go inspect all lockers and try to find out which one it is.</p>
      <p>Almost there... Good luck!</p>
      <p>Ho ho ho!</p>
      <br />
      <Image src="/santa.png" alt="Santa" width={180} height={180} />
    </div>
  );
}

export default Story;
