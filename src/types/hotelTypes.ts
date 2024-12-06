export interface RoomType {
    code: string
    description: string
    amenities: string[]
    features: string[]
}

export interface Room {
    roomType: string
    roomId: string
}

export interface Hotel {
    id: string
    name: string
    roomTypes: RoomType[]
    rooms: Room[]
}
