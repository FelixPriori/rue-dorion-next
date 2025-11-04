import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import './audioTranslationPlayer.scss'
import { AudioTranslation } from '../_types/types'

export default function AudioTranslationPlayer(props: AudioTranslation) {
	return (
		<div className="audio-translation">
			<h2 className="audio-translation__word">{props.fields.word}</h2>
			<div className="audio-translation__traduction">
				{documentToReactComponents(props.fields.traduction)}
			</div>
			<audio className="audio-translation__audio" controls>
				<source src={props.fields.audio.fields.file.url} />
				<track default kind="captions" />
				Your browser does not support the audio element.
			</audio>
		</div>
	)
}
