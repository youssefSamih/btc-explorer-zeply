// ####################################################################################################
// ~~~~~~ Hocs
// ####################################################################################################

export const getDisplayName = (WrappedComponent: {
  displayName?: string;
  name?: string;
}) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
