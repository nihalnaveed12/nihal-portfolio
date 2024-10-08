import PropTypes from "prop-types";

function PrimaryButton({ label, href, target = "_self", className, icon ,onClick}) {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + className}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + className} onClick={onClick}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
}

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

function OutlineButton({ label, href, target = "_self", className, icon }) {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + className}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + className}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
}

OutlineButton.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export { PrimaryButton, OutlineButton };
