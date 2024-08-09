import { Button, Div, Input, SubTitle, Title } from "../../styles/global.style"
import { Label, LabelContainer, LabelItem, Link, TODO } from "./home.styled";

const Home = () => {
    return (
        <>
            <SubTitle mb={20}>Hey Lucas, welcome to Pactto!</SubTitle>
            <LabelContainer >
                <LabelItem>
                    <TODO>DONE</TODO>
                    <Label>Open your inbox and verify your email</Label>
                </LabelItem>
                <LabelItem>
                    <TODO>DONE</TODO>
                    <Label>Check the
                        <Link
                            href="https://www.youtube.com/watch?si=j8Hi4uCL0oKfX7oU&t=93&v=CvbvDGsZsKM&feature=youtu.be"
                            target="_blank"> short video of Pactto in action
                        </Link>
                    </Label>
                </LabelItem>
                <LabelItem>
                    <TODO>DONE</TODO>
                    <Label>To doWanna record your computer screen or review files? Download Pactto for
                        <Link href="https://pactto.com/#download" target="_blank"> Mac </Link>or
                        <Link href="https://pactto.com/#download" target="_blank"> Windows </Link>
                    </Label>
                </LabelItem>
                <LabelItem>
                    <TODO>DONE</TODO>
                    <Label>To doWanna review videos, images or audio files with your phone or tablet? Download Pactto for
                        <Link href="https://apps.apple.com/us/app/pactto-record-video-feedback/id1662226619" target="_blank"> iOS </Link>or
                        <Link href="https://play.google.com/store/apps/details?id=com.pactto.replay&pli=1" target="_blank"> Android </Link>
                    </Label>
                </LabelItem>
            </LabelContainer>

            <Div mt={20}>
                <Title >My uploads</Title>
                <Button>Upload new video</Button>
            </Div>

            <Input mt={50} placeholder="Search" ></Input>
      
        </>


    );
}

export default Home;

