import Container from '@/app/ui/container';
import LeftContent from '@/app/ui/left-content';
import RightContent from '@/app/ui/right-content';
import GirlAndPet from '@/app/ui/girl-and-pet';

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
