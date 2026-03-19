---
title: Types
description: All the type definitions for Juggernaut
---

thank you to RealCheeseAcorn for kindly providing this

```lua
export type CustomData = {[string]: any}

export type UnlockTypes = "Points" | "Discovery" | "Code" | "Gamepass" | "UserId"

export type Shared_Abilities = {[string]: Juggernaut_Ability}
export type Shared_Rages = {[string]: Juggernaut_Rage}

export type Server_Abilities = {[string]: (juggernautPlayer:Player, receivedClientData: CustomData) -> boolean}
export type Server_Rages = {[string]: (juggernautPlayer:Player, receivedClientData: CustomData) -> boolean}

export type Client_Abilities = {[string]: () -> CustomData}
export type Client_Rages = {[string]: () -> CustomData}

export type Juggernaut_Shared = ModuleScript & {
	Properties: Juggernaut_Properties,
	Abilities: Shared_Abilities,
	Rages: Shared_Rages
}
export type Juggernaut_Server = ModuleScript & {
	IntroPlayed:() -> ()?,
	JuggernautSpawned:(juggernautPlayer: Player) -> (),
	JuggernautDied:(juggernautPlayer: Player) -> (),
	Abilities: Server_Abilities,
	Rages: Server_Rages
}
export type Juggernaut_Client = ModuleScript & {
	IntroPlayed:() -> ()?,
	JuggernautSpawned: (juggernautPlayer: Player) -> (),
	JuggernautDied:(juggernautPlayer: Player) -> (),
	Abilities: Client_Abilities,
	Rages: Client_Rages,
	AlmanacEntry: ModuleScript & Juggernaut_AlmanacEntry,
}

export type Juggernaut = Instance & {
	Shared: Juggernaut_Shared,
	Server: Juggernaut_Server,
	Client: Juggernaut_Client,
	Skins: Folder,
	Weapons: Folder,
	Gui: Folder,
	Assets: Folder,
	Sounds: Folder,
	Remotes: Folder,
}

export type Juggernaut_Ability = {
	Name: string,
	Description: string,
	AlmanacDescription: string?,
	Cooldown: number,
	DefaultCooldown: number,
	CooldownCountsWhenNotActive: boolean,
	UsableWhenNotReady: boolean,
	Uses: number,
	Sound: Sound?,
	AlmanacHidden: boolean?
}

export type Juggernaut_Rage = {
	Name: string,
	Description: string,
	AlmanacDescription: string?,
	Charge: number,
	ChargeModifier: number,
	ModifierHealthPercentageBased: boolean,
	MaximumCharge: number,
	ChargesWhenNotActive: boolean,
	UsableWhenNotReady: boolean,
	Uses: number,
	Sound: Sound?,
	AlmanacHidden: boolean?
}

export type Juggernaut_Properties = {
	Id: string,
	Name: string,
	Creators: {string},
	Skin: string,
	HealthScale: number,
	WalkSpeed: number,
	JumpPower: number,
	BossDefense: number,

	VSHSound: Sound,
	IntroSound: Sound,
	IntroPlayAt: number,
	WinSounds: {Sound},
	LoseSounds: {Sound},
	KillSounds: {Sound},

	Icon: string,
	IconSizeMult: number,
	BarGradient: UIGradient,

	Weapons: {string},

	Ability: Juggernaut_Ability?,
	Rage: Juggernaut_Rage?,

	JuggernautStartingHint: string?,
	InnocentsStartingHint: string?,

	_Cooldown: number,
	_UnlockMethod: UnlockTypes,
	_PointsRequired: number,
	_Gamepass: number?,
	_AlmanacSecret: boolean, -- Determines whether the Juggernaut is hidden in the almanac until discovered
	_CanBeRandomlySelected: boolean, -- Determines whether the Juggernaut can be selected or not
	_Preliminary: boolean, -- Determines if the Juggernaut should be accessible or not
}

export type Juggernaut_AlmanacEntry = {
	Create: (entry: Instance) -> ()
}

return true

-- Shoutout to Yosgerwy for helping with the Juggernaut v2 type checker
-- Also shoutout to Cxlyius, Rad_Lad7, PixelHix, dynamitebirthday and everyone else who contributed / tested Juggernaut. You're all so amazing and I wouldn't be doing this without you ❤️
```