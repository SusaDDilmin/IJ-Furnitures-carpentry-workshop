import Link from "next/link";
export default function ServiceCard({title, description, link}: {title: string, description: string, link: string}) {


    return (
        <div>
            <div className="bg-white inline-block shadow-xl rounded-2xl p-8 max-w-md mx-auto transition-transform transform hover:scale-105 duration-300 border border-gray-100 w-[500px]">
                <h2 className="text-3xl font-semibold text-gray-900 mb-3">{title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
                <Link
                    href={link}
                    className="inline-block text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 px-5 py-2 rounded-lg text-sm font-medium shadow-md"
                >
                    Learn More →
                </Link>
                </div>
        </div>
    );
}