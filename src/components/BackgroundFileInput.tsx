import React from "react";

interface Props {
  onChange: (files: FileList) => void;
}

const FileInput = ({ onChange, ...rest }: Props) => (
  <div className="mt-1 w-72  flex justify-center px-6 pt-5 pb-6 border-gray-400 border-2 border-dashed rounded-md">
    <div className="space-y-1 text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-400"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <path
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex text-sm text-gray-600">
        <div>
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
          >
            <span>Upload a file</span>

            <input
              {...rest}
              style={{ display: "none" }}
              id="file-upload"
              type="file"
              className="sr-only"
              onChange={(e) => {
                e.target.files && onChange(e.target.files);
              }}
            />
          </label>
        </div>
      </div>
    </div>
  </div>
);

export default FileInput;
