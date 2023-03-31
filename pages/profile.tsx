import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Link from "next/link";

export default function AddPost() {
    const { data: session } = useSession();

    return (
        <div>
            Name : {session?.user?.name}
            <div>
                No books are published till now
                <div>
                    <Link href="/publisher">
                        <button>Publish a book</button>
                    </Link>

                </div>
            </div>
        </div>
    );
}