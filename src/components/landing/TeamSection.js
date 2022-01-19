import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/project/canvas.jpeg'
import Image2 from 'assets/img/project/catch.jpeg'
import Image3 from 'assets/img/project/todo.jpeg'
import Image4 from 'assets/img/project/tracker.jpeg'
import Form from './Form'
import NavLink from '@material-tailwind/react/NavLink';
export default function TeamSection() {
    return (
        <section className="pt-20 pb-48">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Examples of MyProjects">
                    You can see more Projects at My <NavLink href='https://github.com/Thiraphat-DEV' className='text-red-400 cursor:pointer'> Github.</NavLink>
                </Title>
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Draw Canvas"
                        position=" My create Canvas with Pure JS."
                    />
                    <TeamCard
                        img={Image2}
                        name="Catch VACCINE"
                        position="I rebuilt it on COVID-19."
                    />
                    <TeamCard
                        img={Image3}
                        name="TODO LIST"
                        position="Pure Javascript With My Routine."
                    />
                    <TeamCard
                        img={Image4}
                        name="JSON Tracker"
                        position="JAVASCRIPT WITH JSON API."
                    />
                </div>
            </div>
            <Form />
        </section>
    );
}
