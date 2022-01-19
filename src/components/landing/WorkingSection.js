import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import H2 from "@material-tailwind/react/Heading2";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import myphoto from "assets/img/myphoto.jpg";
//tools technology
import react from "assets/img/tools/react.png";
import bootstrap from "assets/img/tools/bootstrap.png";
import css from "assets/img/tools/css.png";
import d3 from "assets/img/tools/d3.png";
import html from "assets/img/tools/html.png";
import jquery from "assets/img/tools/jquery.png";
import nodejs from "assets/img/tools/nodejs.png";
import reactbts from "assets/img/tools/react-bst.png";
import Redux from "assets/img/tools/Redux.png";
import sass from "assets/img/tools/sass.png";
import wordpress from "assets/img/tools/wordpress.png";
// certificated
import ai from "assets/img/cert/ai.png";
import autobot from "assets/img/cert/autobot.png";
import codecombat from "assets/img/cert/codecombat.png";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard
            color="cyan"
            icon="fas fa-robot"
            title="CERTIFICATED BOTAUTOMATION360"
          >
            <img src={autobot} alt="Ai Autobot" />
          </StatusCard>
          <StatusCard
            color="deepPurple"
            icon="fab fa-mailchimp"
            title="CERTIFICATED IMAGEPROCESSING OF AI"
          >
            <img src={ai} alt="imageprocessing" />
          </StatusCard>
          <StatusCard
            color="amber"
            icon="fas fa-code"
            title="CERTIFICATED CODING"
          >
            <img src={codecombat} alt="codecombat" />
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <H2>
              TOOLS
              {" "}<Icon family="font-awesome" name="fa fa-rocket" size="6xl" />
            </H2>{" "}
            <br /> <br />
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={react} alt="reactlogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={wordpress} alt="wordpresslogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={bootstrap} alt="bstlogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={css} alt="csslogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={d3} alt="d3logo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={sass} alt="sasslogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={reactbts} alt="reactbtslogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={html} alt="htmllogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={nodejs} alt="nodejslogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={jquery} alt="jquerylogo" />
            </div>
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              {/* <Icon name="people" size="3xl" /> */}
              <img src={Redux} alt="reduxlogo" />
            </div>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={myphoto} />
              <CardBody>
                <H6 color="gray">Mr.Thiraphat Chorakhe.</H6>
                <Paragraph color="blueGray">
                  The 19-year-old is studying New technology himself. You can
                  check out my project at GitHub.
                  <strong>NEVERSTOP LEARNING🌍</strong>
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
