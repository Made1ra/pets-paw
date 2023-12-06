'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Log } from '@/app/lib/store';
import Container from '@/app/ui/container';
import LeftSection from '@/app/ui/leftSection';
import RightSectionContainer from '@/app/ui/rightSectionContainer';
import LinkContainer from '@/app/ui/linkContainer';
import Burger from '@/app/ui/burger/burger';
import SearchBar from '@/app/ui/searchBar';
import Smiles from '@/app/ui/smiles';
import ActionsContainer from '@/app/ui/actionsContainer';
import NavigationContainer from '@/app/ui/navigationContainer';
import SmallLink from '@/app/ui/smallLink';
import LargeTextButton from '@/app/ui/largeTextButton';
import ImageContainer from '@/app/ui/imageContainer';
import ControlsContainer from '@/app/ui/controlsContainer';
import Controls from '@/app/ui/controls';
import ActionMessage from '@/app/ui/actionMessage';

export default function Voting() {
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    const logs = useSelector((state: { logs: { logs: Log[] } }) => state.logs.logs);

    const [randomImage, setRandomImage] = useState<{ name: string, url: string, id: string } | null>(null);

    const pathname = usePathname();

    async function handleLikeDislikeClick() {
        const headers = new Headers();
        headers.append('x-api-key', API_KEY || '');
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1`, {
            headers: headers
        });
        const data = await response.json();
        setRandomImage(data[0] || null);
    }

    useEffect(() => {
        const getRandomImage = async () => {
            const headers = new Headers();
            headers.append('x-api-key', API_KEY || '');
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?has_breeds=1&limit=1`, {
                headers: headers
            });
            const data = await response.json();
            setRandomImage(data[0] || null);
        };
        getRandomImage();
    }, [API_KEY]);

    return (
        <Container>
            <LeftSection isActive={pathname === '/voting' ? 1 : 4} />
            <RightSectionContainer>
                <LinkContainer>
                    <Burger isActive={pathname === '/voting' ? 1 : 4} />
                    <SearchBar />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton>VOTING</LargeTextButton>
                    </NavigationContainer>
                    <ImageContainer>
                        {randomImage && (
                            <div className="relative w-[18.4375rem] h-[10.38306rem] rounded-[1.25rem]
                            sm:w-[41.75rem] sm:h-[23.5115rem]
                            lg:w-[40rem] lg:h-[22.5rem]">
                                <Image
                                    className="rounded-[1.25rem]"
                                    src={randomImage.url}
                                    alt="Cat image"
                                    fill
                                    sizes="100vw"
                                    priority
                                />
                            </div>
                        )}
                        <ControlsContainer>
                            <Controls
                                reference_image_id={randomImage ? randomImage.id : ''}
                                url={randomImage ? randomImage.url : ''}
                                onLikeDislikeClick={() => handleLikeDislikeClick()}
                            />
                        </ControlsContainer>
                    </ImageContainer>
                    {
                        logs.length > 0 && logs.slice().reverse().map((log, i) => (
                            <ActionMessage
                                key={i}
                                reference_image_id={log.reference_image_id}
                                category={log.category}
                                dateOfEditing={log.dateOfEditing}
                                action={log.action}
                            />
                        ))
                    }
                </ActionsContainer>
            </RightSectionContainer>
        </Container>
    );
}
