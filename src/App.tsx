import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import {
	ExitIcon,
	IdCardIcon,
	ImageIcon,
	Pencil1Icon,
} from '@radix-ui/react-icons';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Demo Radix</p>
				<MyDropDownMenu />
			</header>
		</div>
	);
}

const MyDropDownMenu = () => {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger className="DropdownMenu-trigger ">
				<MyAvatar />
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				className="DropdownMenu-content"
				sideOffset={25}
				align={'end'}
			>
				<DropdownMenu.Item className="DropdownMenu-item regular-text">
					<a className="DropdownMenu-item-anchor">
						<div className="DropdownMenu-item-right-icon-container">
							<Pencil1Icon width={18} height={18} />
						</div>{' '}
						Editar perfil
					</a>
				</DropdownMenu.Item>
				<DropdownMenu.Separator className="DropdownMenu-separator" />
				<DropdownMenu.Item className="DropdownMenu-item thin-text">
					Mi firma
				</DropdownMenu.Item>
				<DropdownMenu.Item className="DropdownMenu-item thin-text">
					Hoja de vida
				</DropdownMenu.Item>
				<DropdownMenu.Item className="DropdownMenu-item thin-text">
					Carta laboral
				</DropdownMenu.Item>
				<DropdownMenu.Item className="DropdownMenu-item thin-text">
					Encuesta de sintomas
				</DropdownMenu.Item>
				<DropdownMenu.Separator className="DropdownMenu-separator " />
				<DropdownMenu.Item className="DropdownMenu-item regular-text">
					<ImageIcon width={18} height={18} />
					Cambiar fondo
				</DropdownMenu.Item>
				<DropdownMenu.Item className="DropdownMenu-item regular-text">
					<IdCardIcon width={18} height={18} />
					Recuperar contraseña
				</DropdownMenu.Item>
				<DropdownMenu.Item className="DropdownMenu-item regular-text">
					<ExitIcon width={18} height={18} />
					Cerrar sesión
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
};

const MyAvatar = () => {
	// const [imageStatus, setImageStatus] = useState('');

	return (
		<Avatar.Root className="Avatar-root">
			{/* {imageStatus === 'loading' && <p>loading...</p>} */}

			<Avatar.Image
				className="Avatar-image"
				src="https://avatars.githubusercontent.com/m4rteaga"
				// onLoadingStatusChange={(status) => setImageStatus(status)}  // optional
			/>
			<Avatar.Fallback>
				<p>loading...</p>
			</Avatar.Fallback>
		</Avatar.Root>
	);
};

export default App;
