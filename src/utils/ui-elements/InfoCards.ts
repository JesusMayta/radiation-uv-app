import { IconType } from 'react-icons';
import { LuShield, LuWaves } from 'react-icons/lu';
import { PiLightningFill } from 'react-icons/pi';

interface Props {
    id: number;
    type: string;
    icon: IconType;
    iconClassName: string;
    info: string;
    aos: string;
};

export const InfoCards: Props[] = [
    {
        id: 1, type: 'UVA', icon: LuWaves, iconClassName: 'text-4xl text-blue-500', info: 'La radiación ultravioleta A (UVA) de onda larga penetra profundamente en la piel y es responsable del envejecimiento prematuro.', aos: 'zoom-out-right'
    },
    {
        id: 2, type: 'UVB', icon: PiLightningFill, iconClassName: 'text-4xl text-red-600', info: 'La radiación ultravioleta B (UVB) de onda media daña las capas superficiales de la piel y es la principal causa de quemaduras solares.', aos: 'zoom-out-down'
    },
    {
        id: 3, type: 'UVC', icon: LuShield, iconClassName: 'text-4xl text-green-600', info: 'La radiación ultravioleta tipo C (UVC) es una forma de energía invisible que proviene del sol y es la más dañina de los rayos ultravioleta.', aos: 'zoom-out-left'
    },
];