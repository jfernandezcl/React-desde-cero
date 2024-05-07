import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App () {
    const format = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard 
            formatUserName={format}
            isFollowing={true} 
            userName="midudev" 
            name="Miguel Ángel"/>
            <TwitterFollowCard 
            formatUserName={format}
            isFollowing={false} 
            userName="pheralb" 
            name="Pablo hernandez"/>
        </section>
        )
}
