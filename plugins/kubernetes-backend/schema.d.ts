/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface Config {
  kubernetes?: {
    objectTypes?: Array<
      | 'pods'
      | 'services'
      | 'configmaps'
      | 'deployments'
      | 'replicasets'
      | 'horizontalpodautoscalers'
      | 'jobs'
      | 'cronjobs'
      | 'ingresses'
    >;
    serviceLocatorMethod: {
      type: 'multiTenant';
    };
    clusterLocatorMethods: Array<
      | {
          /** @visibility frontend */
          type: 'gke';
          /** @visibility frontend */
          projectId: string;
          /** @visibility frontend */
          region?: string;
          /** @visibility frontend */
          skipTLSVerify?: boolean;
        }
      | {
          /** @visibility frontend */
          type: 'config';
          clusters: Array<{
            /** @visibility frontend */
            url: string;
            /** @visibility frontend */
            name: string;
            /** @visibility secret  */
            serviceAccountToken?: string;
            /** @visibility frontend */
            authProvider: 'aws' | 'google' | 'serviceAccount';
            /** @visibility frontend */
            skipTLSVerify?: boolean;
          }>;
        }
    >;
    customResources?: Array<{
      group: string;
      apiVersion: string;
      plural: string;
    }>;
    apiVersionOverrides?: {
      pods?: string;
      services?: string;
      configmaps?: string;
      deployments?: string;
      replicasets?: string;
      horizontalpodautoscalers?: string;
      ingresses?: string;
    };
  };
}
