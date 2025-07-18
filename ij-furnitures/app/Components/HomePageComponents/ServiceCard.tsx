import Link from "next/link";
export default function ServiceCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    
      <div
        className="bg-white inline-block shadow-xl rounded-2xl border border-gray-100 
                transition-transform transform hover:scale-105 duration-300 
                w-full sm:w-[300px] md:w-[350px] 
                h-[400px] sm:h-[420px] md:h-[440px] 
                p-4 sm:p-6 md:p-8 mx-auto"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          {title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
          {description}
        </p>

        <Link
          href={link}
          className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-200 
               text-white text-sm sm:text-base px-4 sm:px-5 py-2 rounded-lg font-medium shadow-md"
        >
          Learn More →
        </Link>
      </div>
    
  );
}
