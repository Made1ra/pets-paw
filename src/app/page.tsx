import { Container, GirlAndPet, LeftContent, RightContent } from "@/components";

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
