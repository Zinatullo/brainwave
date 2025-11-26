import React from 'react'
import Section from '../../components/Home/section/Section'
import Chat from '../../components/Home/chat/Chat'
import Unlock from '../../components/Home/unlock/Unlock'
import Ai from '../../components/Home/ai/Ai'
import Connect from '../../components/Home/connect/Connect'
import Made from '../../components/Home/made/Made'
import Saying from '../../components/Home/saying/Saying'
import Working from '../../components/Home/working/Working'
import Brainwave from '../../components/Features/brainwave/Brainwave'
import Pay from '../../components/Price/pay/Pay'
import './Home.css'
const Home = () => {
	return (
		<>
		
					<Section/>
					<Chat	/>
					<Unlock />
					<Ai	/>
					<Connect />
					<Made />
					<Pay/>
					<Saying />
					<Working />
					<Brainwave/>
				</>
	)
}

export default Home