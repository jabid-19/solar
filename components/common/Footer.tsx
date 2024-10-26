import { Badge } from "../ui/badge";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SolarTech Solutions</h3>
            <p>New York, USA</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p>info@solartech.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/solartech-solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-yellow-500 transition-colors"
                >
                  LinkedIn
                </Badge>
              </Link>
              <Link
                href="https://twitter.com/solartech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Badge
                  variant="secondary"
                  className="cursor-pointer hover:bg-yellow-500 transition-colors"
                >
                  Twitter
                </Badge>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 SolarTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
