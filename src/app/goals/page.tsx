import GoalsMain from '@/components/goals/GoalsMain';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const goalsPage = () => {
    return (
        <>
             <Wrapper>
                <main>
                    <GoalsMain/>
                </main>
            </Wrapper>
        </>
    );
};

export default goalsPage;