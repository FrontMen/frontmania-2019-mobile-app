import { useEffect, useState } from 'react';
import { getAsync, askAsync, PermissionType } from 'expo-permissions';

export function usePermissions(permissionTypes: PermissionType[]): boolean {
  const [permissionStatus, setPermissionStatus] = useState(false);

  useEffect(() => {
    async function getPermission(): Promise<void> {
      let response = await getAsync(...permissionTypes);

      if (response.status !== 'granted') {
        response = await askAsync(...permissionTypes);
      }

      setPermissionStatus(response.status === 'granted' || response.status === 'undetermined');
    }

    getPermission();
  }, []);

  return permissionStatus;
}
