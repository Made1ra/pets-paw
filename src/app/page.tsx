import Container from '@/app/ui/container';
import LeftContent from '@/app/ui/leftContent';
import RightContent from '@/app/ui/rightContent';
import GirlAndPet from '@/app/ui/girlAndPet';

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
