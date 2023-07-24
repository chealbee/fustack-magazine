import Image from "next/image";

import "./style.scss";
import Container from "@/app/components/layout/container/Container";

import img from "@/public/images/warehouse-indoor-view 2.png";
import img2 from "@/public/images/6fae6e2815e0ea6fe4e071f6f0bab7f1 1.png";

export default function About() {
  return (
    <div>
      <Container>
        <h4 className="about__heading">About company</h4>
        <div className="aboutTextInfo">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam
            necessitatibus suscipit exercitationem, minima pariatur nihil sed ea
            fuga optio fugit mollitia dolore ut omnis reprehenderit, laudantium
            quibusdam, dicta ipsam.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam
            necessitatibus suscipit exercitationem, minima pariatur nihil sed ea
            fuga optio fugit mollitia dolore ut omnis reprehenderit, laudantium
            quibusdam, dicta ipsam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="ABOUTimgs">
          <Image className={"ABOUTimg ABOUTimg__right"} src={img} alt="img" />
          <Image className={"ABOUTimg ABOUTimg__left"} src={img2} alt="img" />
        </div>
      </Container>
    </div>
  );
}
