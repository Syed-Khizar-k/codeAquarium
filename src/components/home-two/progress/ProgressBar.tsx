import React from "react";

type ProgressBarProps = {
  bgcolor: string;
  completed: number;
};

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles: React.CSSProperties = {
    height: 5,
    width: '100%',
    backgroundColor: "#173044",
    borderRadius: 0,
    marginBottom: 20,
  }

  const fillerStyles: React.CSSProperties = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles: React.CSSProperties = {
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
