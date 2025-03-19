import Container from "@/components/container";
import LeftContent from "@/components/left-content";
import RightContent from "@/components/right-content";
import GirlAndPet from "@/components/girl-and-pet";

export default function Home() {
  return (
    <Container>
      <LeftContent isActive={4} />
      <RightContent>
        <GirlAndPet />
      </RightContent>
    </Container>
  );
}
