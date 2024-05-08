import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App () {
    return (
        <section className='App'>

            <TwitterFollowCard isFollowing userName={"midudev"}>
                Miguel Ángel 
            </TwitterFollowCard>

            <TwitterFollowCard isFollowing userName={"pheralb"}>
                Pablo Hernandez 
            </TwitterFollowCard>

        </section>
        )
}
