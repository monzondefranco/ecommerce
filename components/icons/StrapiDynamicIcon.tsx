'use client'

import dynamic from 'next/dynamic'

import { IconProps } from '.'

const BoxIcon = dynamic(() => import('./BoxIcon'))
const FireIcon = dynamic(() => import('./FireIcon'))
const HomeIcon = dynamic(() => import('./HomeIcon'))
const ImageIcon = dynamic(() => import('./ImageIcon'))
const LocationIcon = dynamic(() => import('./LocationIcon'))
const LockIcon = dynamic(() => import('./LockIcon'))
const NecktieIcon = dynamic(() => import('./NecktieIcon'))
const TeamIcon = dynamic(() => import('./TeamIcon'))
const TermsIcon = dynamic(() => import('./TermsIcon'))
const UserIcon = dynamic(() => import('./UserIcon'))

type Props = {
  name: string
  className?: string
  color?: string
  width?: number
  height?: number
}

export default function StrapiDynamicIcon({ name, ...props }: Props) {
  const Icon = iconByName[name]

  if (!Icon) return <></>
  return <Icon {...props} />
}

const iconByName: Record<string, React.ComponentType<IconProps>> = {
  box: BoxIcon,
  fire: FireIcon,
  home: HomeIcon,
  image: ImageIcon,
  location: LocationIcon,
  lock: LockIcon,
  necktie: NecktieIcon,
  team: TeamIcon,
  terms: TermsIcon,
  user: UserIcon,
}
