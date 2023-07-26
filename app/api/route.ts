import { NextResponse } from "next/server";
import { getItem } from "@/prisma/PrismaCollections";
import Utils from "@/Utils";

const getAExploreData = async (req, res) => {

    const response = await fetch('https://links.papareact.com/pyp', { rejectUnauthorized: false });
    const exploreData = await response.json();

    return NextResponse(exploreData);
}

export { getAExploreData as GET };
