import { RiComputerLine } from 'react-icons/ri'
import { TbDeviceComputerCamera } from 'react-icons/tb'
import { VscFeedback } from 'react-icons/vsc'

export const activities = [
  {
    id: 1,
    name: 'FeedBack',
    icon: <VscFeedback size={40} />
  },
  {
    id: 2,
    name: 'Entrevistas',
    icon: <RiComputerLine size={40} />
  },
  {
    id: 3,
    name: 'Crear entrevista',
    icon: <TbDeviceComputerCamera size={40} />
  }
]
