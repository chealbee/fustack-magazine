import { ChangeEvent, useState, forwardRef, RefAttributes } from "react";
import "./style.scss";

interface IFileUploaderProps extends RefAttributes<HTMLInputElement> {
  isValid?: boolean;
  fileUpload?: (file: File) => void;
}

const FileUploader = forwardRef<HTMLInputElement, IFileUploaderProps>(
  ({ isValid, fileUpload, ...remainProps }, ref) => {
    const [curentFile, setCurentFile] = useState<File>();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
        setCurentFile(e.target.files[0]);
        if (fileUpload) fileUpload(e.target.files[0]);
      }
    };

    return (
      <div className="fileUploader">
        <div className="fileUploader__content">
          <input
            type="file"
            accept="imamge/*,.png,.jpg,.gif,.web,.svg"
            className="fileUploader__input"
            onChange={handleChange}
            {...remainProps}
            ref={ref}
          />
          <div className="uploader">
            {curentFile?.name
              ? "the picture is loaded"
              : "please upload the picture"}
          </div>
        </div>

        <div className="fileUploader__info">
          <span className="fileUploader__name">{curentFile?.name}</span>
        </div>
      </div>
    );
  }
);

export default FileUploader;
