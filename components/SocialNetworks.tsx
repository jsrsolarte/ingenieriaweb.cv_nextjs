import {
  FaFacebookF,
  FaGithubAlt,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

interface SocialNetworksProps {
  data: NetworkData;
}

const SocialNetworks = ({ data }: SocialNetworksProps) => {
  return (
    <div className="card h-full">
      <div className="grid grid-flow-row-dense grid-rows-7 h-screen gap-4">
        <div className="flex justify-center items-end">
          <span className="font-bold">Links</span>
        </div>
        {data.github && (
          <div className="flex justify-center items-center">
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 bg-app-highlighter-color rounded-full p-3"
            >
              <FaGithubAlt className="w-full h-full" />
            </a>
          </div>
        )}
        {data.facebook && (
          <div className="flex justify-center items-center">
            <a
              href={data.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 bg-app-highlighter-color rounded-full p-3"
            >
              <FaFacebookF className="w-full h-full" />
            </a>
          </div>
        )}
        {data.instagram && (
          <div className="flex justify-center items-center">
            <a
              href={data.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 bg-app-highlighter-color rounded-full p-3"
            >
              <FaInstagram className="w-full h-full" />
            </a>
          </div>
        )}
        {data.linkedin && (
          <div className="flex justify-center items-center">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 bg-app-highlighter-color rounded-full p-3"
            >
              <FaLinkedin className="w-full h-full" />
            </a>
          </div>
        )}
        {data.twitterX && (
          <div className="flex justify-center items-center">
            <a
              href={data.twitterX}
              target="_blank"
              rel="noopener noreferrer"
              className="w-2/3 bg-app-highlighter-color rounded-full p-3"
            >
              <FaXTwitter className="w-full h-full" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialNetworks;
