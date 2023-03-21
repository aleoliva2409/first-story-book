import './mylabel.css';

export interface MyLabelProps {
  /**
  Is label
  */
  label: string;

  /**
  Is size of label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
  Capitalize all characters
   */
  allCaps: boolean;

  /**
  Setting color
   */
  color: 'primary' | 'secondary' | 'tertiary';

  /**
  Setting custom color
   */
  customColor?: string;
}

const MyLabel = ({
  label,
  size,
  allCaps,
  color = 'primary',
  customColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: customColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
